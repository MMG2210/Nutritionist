import { TestBed } from '@angular/core/testing';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
        providers: [],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should have can activate function',()=>{
    expect(guard.canActivate).toBeTruthy();
  });
});
