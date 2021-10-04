export const authInterceptor = function () { }

authInterceptor.prototype.intercept = function (request, invoker) {

    // * const token = document.cookie 

    const metadata = request.getMetadata();
    metadata["authorization"] = `${document.cookie.slice(6)}`

    return invoker(request)
}

