export class Horoscopo {
    name: string;
    start_date: string;
    end_date: string;

    Horoscopo (name?: string, start_date?: string, end_date?: string){
        this.name = name;
        this.start_date = start_date;
        this.end_date = end_date;
    }
}
