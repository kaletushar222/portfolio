import React, { Component } from 'react';
import {  } from 'semantic-ui-react';
import { Item, Image } from 'semantic-ui-react'

class ComponentHomeContent extends Component {
	 render() {
        return(
        	<div className="full_height">
        	<Item.Group>
			    <Item>
			      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
			      <Item.Content>
			        <Item.Header as='a'>Header</Item.Header>
			        <Item.Meta>Description</Item.Meta>
			        <Item.Description>
			          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
			        </Item.Description>
			        <Item.Extra>Additional Details</Item.Extra>
			      </Item.Content>
			    </Item>

			    <Item>
			      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

			      <Item.Content>
			        <Item.Header as='a'>Header</Item.Header>
			        <Item.Meta>Description</Item.Meta>
			        <Item.Description>
			          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
			        </Item.Description>
			        <Item.Extra>Additional Details</Item.Extra>
			      </Item.Content>
			    </Item>
			</Item.Group>
			</div>
        )
    }
}

export default ComponentHomeContent