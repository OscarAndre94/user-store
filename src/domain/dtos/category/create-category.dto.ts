
export class CreateCategoryDto {

    private constructor(
        public readonly name: string,
        public readonly available: boolean,
    ){}

    static create( object: { [key:string]: any } ):[string?, CreateCategoryDto?] {
        const {name, available } = object;
        let availableBoolen = available;

        if ( !name ) return ['Missing name'];
        if( typeof available !== 'boolean') {
            availableBoolen = ( available === 'true' )
        }

        return [undefined, new CreateCategoryDto(name, availableBoolen)];
    }
}