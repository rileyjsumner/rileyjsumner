import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faStackOverflow,
  faGithub,

} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faStackOverflow = faStackOverflow;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
