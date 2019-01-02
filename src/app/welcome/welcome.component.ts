import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import AppComponent from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  message : string = 'Some Welcome Message'
  welcomeMessageFromService: String
  name = ''

  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }
  
  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    ); 
    // console.log("Get Welcome Message");
    console.log('Last Line of getWelcomeMessage')
    
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    ); 
    // console.log("Get Welcome Message");
    console.log('Last Line of getWelcomeMessage')
    
  }
  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  } 

  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message
  }

}
