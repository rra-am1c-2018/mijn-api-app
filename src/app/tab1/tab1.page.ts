import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private duckInfo =  [
                        {
                          subtitle: 'Donald Duck',
                          title: 'Zwarte Magica',
                          content: 'Zwarte Magica wil altijd het geluksdubbeltje stelen van Dagobert Duck.',
                          image: './assets/images/zwarte-magica.png'
                        },
                        {
                          subtitle: 'Donald Duck',
                          title: 'Zware Jongens',
                          content: 'De zware jongens zijn uit op het geld van Dagobert Duck in zijn geldkubus',
                          image: './assets/images/zware-jongens.gif'
                        },
                        {
                          subtitle: 'Donald Duck',
                          title: 'Guus Geluk',
                          content: 'Guus geluk is de neef van Donald Duck en heeft altijd geluk',
                          image: './assets/images/guus-geluk.png'
                        },
                        {
                          subtitle: 'Donald Duck',
                          title: 'Kwik Kwek en Kwak',
                          content: 'Kwik Kwek en Kwak zijn de neefjes van Donald Duck en zijn gek op avontuur',
                          image: './assets/images/kwikkwekkwak.png'
                        },
                        {
                          subtitle: 'Donald Duck',
                          title: 'Dagobert Duck',
                          content: 'Dagobert Duck is de rijke oom van Donald Duck',
                          image: './assets/images/dagobertduck.jpg'
                        },
                        {
                          subtitle: 'Donald Duck',
                          title: 'Oma Duck',
                          content: 'Oma Duck is de oma van Donald Duck',
                          image: './assets/images/omaduck.jpg'
                        }
                      ];
}
