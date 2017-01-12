export class Section {
    constructor(options: {
        title?: string,
        description?: string,
        url?: string,
        logo?: string
    } = {}) {
        this.title = options.title || "";
        this.description = options.description || "";
        this.url = options.url || "";
        this.logo = options.logo || "";
    }

    title: string;
    description: string;
    url: string;
    logo: string;
}