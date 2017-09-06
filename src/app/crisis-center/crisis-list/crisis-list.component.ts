import { Component, OnInit } from '@angular/core';
import { Crisis, CrisisService } from '../crisis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises: Crisis[];
  selectedId: number;
  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getCrises()
      .then(crises => this.crises = crises);
  }
  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }
  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;

    this.router.navigate([this.selectedId], {relativeTo: this.route});
  }
}
