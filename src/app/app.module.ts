import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TechSkillPageComponent } from './tech-skill-page/tech-skill-page.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FooterComponent } from './footer/footer.component';
import { CurriculumVitaePageComponent } from './curriculum-vitae-page/curriculum-vitae-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FormsModule } from '@angular/forms';
import { PortfolioSiteComponent } from './portfolio-site/portfolio-site.component';
import { CarouselModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    NavbarComponent,
    TechSkillPageComponent,
    FooterComponent,
    CurriculumVitaePageComponent,
    AboutMePageComponent,
    ContactPageComponent,
    PortfolioSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule.forRoot(),
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
