<script context='module'>
  	export const ssr = false;
</script>

<script>
import {listblog} from '../methods/blog'
export const load = async()=>{
const stream = await listblog()
var arr = []
stream.on("data", (response) => {
    var obj = {
      id: response.getBlog().getId(),
      author: response.getBlog().getAuthorId(),
      title: response.getBlog().getTitle(),
      content: response.getBlog().getContent(),
    };
    arr.push(obj);
  });
  stream.on("end", (end) => {
    // dispatch(listBlog(arr));
    console.log(arr)
  });

}
</script>

<h1>Home</h1>


