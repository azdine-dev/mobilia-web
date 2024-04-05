import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { TokenService } from 'src/app/shared/services/auth/token.service';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { header } from 'src/app/shared/services/model/model';
import { User } from 'src/app/shared/services/model/user';
import { SidebarService } from 'src/app/shared/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  base = '';
  page = '';
  last = '';
  header: header[] = [];
  @Input() authenticatedUser: User | undefined;
  token: string | null = '';
  public routes = routes;

  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar: SidebarService,
    private authService: AuthService,
    private tokenService: TokenService,
    private route: Router
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.header = this.data.header;
  }
  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
  }
  signout() {
    this.authService.signOut();
    this.route.navigate([routes.home]);
  }
}
