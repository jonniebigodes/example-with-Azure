import React from 'react'
import ExampleComponent from './ExampleComponent'

export default {
    component:ExampleComponent,
    title:'AzureExampleComponent'
}

const Template = (args)=> <ExampleComponent {...args} />

export const ExampleOne= Template.bind({})
ExampleOne.args = {
    propertyA:25,
    propertyB:'ExampleOne'
}


export const ExampleTwo = Template.bind({});
ExampleTwo.args = {
    propertyA:256,
    propertyB:'ExampleTwo'
}