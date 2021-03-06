import html from '/js/html.js';

let template = function(product) {
    let name = product.name;
    let views = product.views;
    let votes = product.votes;

    return html`
        
        <li>the ${name} had ${views} views and ${votes} votes</li>
   `;
};

export default class ProductResults {
    constructor(props) {
        this.product = props.product;

    }

    render() {
        console.log('results showing', this.product);
        let dom = template(this.product);
        return dom;
    }
}