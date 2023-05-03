import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    public name: string = 'ironman';
    public age: number = 45;

    get capitalizedName():string{
        return this.name.toUpperCase();
    }

    getHeroDescription():string {
        return `${ this.name } - ${ this.age }`;
    }

    changeHero(): void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 25;
    }

    resetForm(): void {
        this.name = 'Ironman';
        this.age = 45;
    }
}