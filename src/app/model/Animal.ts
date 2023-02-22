export class Animal{
    #id: number;
    #grup: string;
    #familia: string;
    #especie: string;
    #origen: string;
    #endemisme: string;
    #ambient: string;


    constructor(id: number, grup:string, familia:string, especie:string , origen:string, endemisme:string, ambient: string ) {
        this.#id = id;
        this.#grup = grup;
        this.#familia = familia;
        this.#especie = especie;
        this.#origen = origen;
        this.#endemisme = endemisme;
        this.#ambient = ambient;
    }


    get id(): number {
        return this.#id;
    }

    set id(value: number) {
        if (value) {
            this.#id = value;
        }
    }
    get grup(): string {
        return this.#grup;
    }

    set grup(value: string) {
        if (value) {
            this.#grup = value.trim();
        }
    }

    get familia(): string {
        return this.#familia;
    }

    set familia(value: string) {
        if (value) {
            this.#familia = value.trim();
        }
    }

    get especie(): string {
        return this.#especie;
    }

    set especie(value: string) {
        if (value) {
            this.#especie = value;
        }
    }

    get origen(): string {
        return this.#origen;
    }

    set origen(value: string) {
        if (value) {
            this.#origen = value.trim();
        }
    }

    get endemisme(): string {
        return this.#endemisme;
    }

    set endemisme(value: string) {
         
            this.#endemisme = value;
         
    }


    get ambient(): string {
        return this.#ambient;
    }

    set ambient(value: string) {
         
            this.#ambient = value;
         
    }
    
}