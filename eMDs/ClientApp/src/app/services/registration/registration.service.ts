import { Injectable } from '@angular/core';
import { RegisterForm } from '../../models/register-form.model';
import { EndpointFactoryService } from '../endpoint-factory.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private endPointFactory: EndpointFactoryService) { }

  registerUser(data: RegisterForm) {
    return this.endPointFactory.registerUser(data) 
  }
}
