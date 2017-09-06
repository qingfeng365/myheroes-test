import { Component, OnInit } from '@angular/core';
import { Crisis, CrisisService } from '../crisis.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;
  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(Params => {
        const id: string = Params.id;
        this.service.getCrisisById(id)
          .then(crisis => {
            this.editName = crisis.name;
            this.crisis = crisis;
          });
      })
  }
  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
