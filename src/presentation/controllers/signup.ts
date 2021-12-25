import { badRequest } from './../helpers/http-helper';
import { MissingParamError } from './../protocols/errors/missing-param-error';
import { HttpRequest, HttpResponse } from './../protocols/https';


export class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse {

        if (!httpRequest.body.name) {
            return badRequest(new MissingParamError('name'))
        }

        if (!httpRequest.body.email) {
            return badRequest(new MissingParamError('email'))
        }
    }
}