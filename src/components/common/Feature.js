import React from 'react';
import Title from '../common/Title.js';
import ContentContainer from './ContentContainer.js';
import Description from './Description.js';
import { Link } from 'react-router-dom';
import { Row, Col } from '../grid';

class Feature extends React.Component {

    render() {
        var rowStyles = {
            position: "relative",
            marginTop: "100px"
        }

        var colStyles = {
            position: "absolute"
        }

        var infoStyles = {
            maxWidth: "250px"
        }

        var content1 = this.props.data.feature1;
        var content2 = this.props.data.feature2;
        var content3 = this.props.data.feature3;

        var photo1 = require(`../../images/projects/${content1.url}`);
        var photo2 = require(`../../images/projects/${content2.url}`);
        var photo3 = require(`../../images/projects/${content3.url}`);

        return (
            <Row style={rowStyles} className="featureRow">
                <Col lgWidth={4} mdWidth={3} smWidth={4} xsWidth={10}
                    lgXOffset={0} mdXOffset={0} smXOffset={1} xsXOffset={1} 
                    xsYOffset={10}
                    style={colStyles}>
                    <Title name={this.props.data.name} />
                    <Description style={infoStyles} info={this.props.data.info}
                        width={[3, 3, 4, 12]}
                    />
                    <Link className={"actionButton"}
                        to={{
                            pathname: '/project',
                            state: {
                                data: this.props.data,
                                back: "/"
                            }
                        }}>See More
                    </Link>
                </Col>

                <ContentContainer x={content1.x} y={content1.y} z={content1.z} width={content1.width} height={content1.height} img={photo1} size="100%"/>
                <ContentContainer x={content2.x} y={content2.y} z={content2.z} width={content2.width} height={content2.height} img={photo2} size="100%"/>
                <ContentContainer x={content3.x} y={content3.y} z={content3.z} width={content3.width} height={content3.height} img={photo3} size="100%"/>
            </Row>
        )
    }
}

export default Feature;