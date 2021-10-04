package user

import (
	"context"
	"encoding/json"
	"fmt"

	"blog.com/server/config"
	"github.com/gomodule/redigo/redis"
	"google.golang.org/grpc/metadata"
)

/*
 * userItem struct is declared in user.go
 * @param ctx contex.Context
 */
func GetAdmin(ctx context.Context) (admin *userItem, err error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, nil
	}
	token := md["authorization"]

	admin = &userItem{}
	res, err := redis.Bytes((config.Cache.Do("GET", token[0])))
	if err != nil {
		fmt.Println("failed token")
		return nil, err
	}

	err = json.Unmarshal(res, &admin)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	fmt.Println("userData ", admin.FirstName)
	return admin, nil
}
