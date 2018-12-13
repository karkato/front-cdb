import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/model/company.model';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { CompanyService } from '../../shared/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  company: Company;
  companyForm = this._fb.group({
    name: new FormControl('', Validators.required)
  });

  constructor(
    private _companyService: CompanyService,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {

    this._companyService
      .getCompanyById(this._route.snapshot.paramMap.get('id'))
      .subscribe(
        computer => {
          this.companyForm.patchValue({
            name: this.company.name
          });
          console.log('got computer object', this.company);
        },

        error => console.log(error)
      );
  }

  edit() {
    this.company.name = this.companyForm.get('name').value;
    console.log('got computer postform object', this.company);
    this._companyService
      .patchCompany(this.company)
      .subscribe(() => this._router.navigate['/dashboard/company']);
  }
}
