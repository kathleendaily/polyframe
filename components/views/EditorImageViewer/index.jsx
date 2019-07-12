import React, { Component } from 'react';
import {
  Container, Image, Segment, Header, Button,
} from 'semantic-ui-react';

class EditorImageViewer extends Component {
  render() {
    return (
      <Container className="EditorImageViewer">
        { this.props.imageSrc.length
          ? (
            <Segment loading={this.props.loading} id="imagePreview" className="padding collapsed">
              { this.props.showPreviewImage
                ? <Image src={this.props.imageSrc} centered />
                : <canvas id="userImageCanvas" height={this.props.canvasHeight} width={this.props.canvasWidth} />
            }
            </Segment>
          )
          : (
            <Segment id="zeroState" placeholder>
              <Image id="placeholder" src="/images/image-placeholder.svg" size="small" centered />
              <Header as="h3">
              Add an image to get started
              </Header>
              <Button onClick={this.props.addImage} primary>Add Image</Button>
            </Segment>
          )
        }
      </Container>
    );
  }
}

export default EditorImageViewer;
