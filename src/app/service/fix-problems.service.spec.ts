import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FixProblemsService } from './fix-problems.service';

describe('FixProblemsService', () => {
  let service: FixProblemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]  //fix No provider HttpClient!
    });
    service = TestBed.inject(FixProblemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
