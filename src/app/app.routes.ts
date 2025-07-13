import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Home} from './pages/home/home';
import { CvGuide } from './pages/cv-guide/cv-guide/cv-guide';

export const routes: Routes = [

  {path: '', component:Home },
    {path: 'nosotros', component:Header },
    {path: 'productos', component:Footer},
    {path : 'about', component: CvGuide},


];
