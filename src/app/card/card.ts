export class Card {

    constructor(
        public order: number,
        public isActive: boolean,
        public urlCatImage: string) {}

    toggleStatus() {
        this.isActive = !this.isActive;
    }

    setImage(url: string) {
        this.urlCatImage = url;
    }
}
