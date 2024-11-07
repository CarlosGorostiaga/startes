import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @ViewChild('statsSection', { static: true }) statsSection!: ElementRef;

  installationsCount = 0;
  energySavedCount = 0;
  installationsTarget = 150;
  energySavedTarget = 5000;
  countersAnimated = false;

  ngOnInit() {
    this.observeStatsSection();
  }

  observeStatsSection() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.countersAnimated) {
          this.countersAnimated = true;
          this.startCounterAnimation();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.statsSection.nativeElement);
  }

  startCounterAnimation() {
    this.animateCounter('installationsCount', this.installationsTarget, 2000);
    this.animateCounter('energySavedCount', this.energySavedTarget, 2000);
  }

  animateCounter(property: 'installationsCount' | 'energySavedCount', targetValue: number, duration: number) {
    const increment = Math.ceil(targetValue / (duration / 30));
    const interval = setInterval(() => {
      if (this[property] < targetValue) {
        this[property] += increment;
      } else {
        this[property] = targetValue;
        clearInterval(interval);
      }
    }, 30);
  }
}