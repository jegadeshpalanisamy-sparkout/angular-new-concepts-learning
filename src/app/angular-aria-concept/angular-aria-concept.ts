import { AccordionContent, AccordionGroup, AccordionPanel, AccordionTrigger } from '@angular/aria/accordion';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-aria-concept',
  imports: [
    AccordionGroup,
    AccordionTrigger,
    AccordionPanel,
    AccordionContent
  ],
  templateUrl: './angular-aria-concept.html',
  styleUrl: './angular-aria-concept.css',
})
export class AngularAriaConcept {

}
