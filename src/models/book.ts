export enum Status { Available, Ordered, Borrowed  }

class Book {
    constructor(public id: string,
                public category: string,
                public title: string,
                public author: string,
                public rating: number,
                public year: number,
                public status: Status,
                public imagesUrl: string[],
                public borrowedTill?: number) {
        if (status === Status.Borrowed && !borrowedTill) {
            throw new Error('borrowedTill field must be a number');
        }
    }
}

export default Book;
