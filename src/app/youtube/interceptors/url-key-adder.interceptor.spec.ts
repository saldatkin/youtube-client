import { TestBed } from '@angular/core/testing';

import { UrlKeyAdderInterceptor } from './url-key-adder.interceptor';

describe('UrlKeyAdderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UrlKeyAdderInterceptor,
    ],
  }));

  it('should be created', () => {
    const interceptor: UrlKeyAdderInterceptor = TestBed.inject(UrlKeyAdderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
