import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MemberDetailComponent } from '../members/member-detail/member-detail.component';
import { Member } from '../_models/member';

@Component({
  selector: 'app-member-photos',
  templateUrl: './member-photos.component.html',
  styleUrls: ['./member-photos.component.css']
})
export class MemberPhotosComponent implements OnInit {
  @Input() memberFromMemberDetails: any

  constructor(config: NgbCarouselConfig) {
      config.keyboard = false;
      config.wrap = false;
      config.keyboard = false;
      config.pauseOnHover;
      config.animation = false;
   }

  ngOnInit(): void {
  }
}
