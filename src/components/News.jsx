import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import CareersHeader from "../components/CareersHeader";
import "../styles/News.scss";
import ReadMoreReact from "read-more-react";

class News extends Component {
  constructor() {
    super();
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard = (card, index) => {
    return (
      <Row id={index}>
        <Col sm="10">
          <Card key={index}>
            <CardBody>
              <CardTitle tag="h5" className="mb-2 text-muted">
                {card.title}
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Written on {card.date} by {card.author}
              </CardSubtitle>
              <CardText className="mb-2 text-muted">
                <ReadMoreReact
                  text={card.text}
                  readMoreText="Read more."
                  min={160}
                  ideal={200}
                />
              </CardText>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Category: {card.category}
              </CardSubtitle>{" "}
              <Button>Read more.</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };

  render() {
    const cardInfo = [
      {
        id: 1,
        date: "12/07/2020",
        title: "Machine Learning",
        author: "Alex M.",
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
        category: "AI/ML",
      },
      {
        id: 2,
        date: "12/08/2020",
        title: "Artificial Intelligence is the superhero of the century!",
        author: "Alex E.",
        text:
          "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 'What's happened to me?' he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops",
        category: "AI/ML",
      },
      {
        id: 3,
        date: "12/07/2020",
        title: "It's Time To Automate Your Business processes!",
        author: "Silvana G.",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere",
        category: "Automation",
      },
      {
        id: 4,
        date: "12/09/2020",
        title: "Docker and Kubernets widely usage puts hackers on stand-by!",
        author: "Nikolina P.",
        text:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee",
        category: "Technologies",
      },
    ];

    const raiseInvoiceClicked = (key) => {
      const url = "/news/" + key;
      window.open(url, "_top");
    };

    return (
      <div>
        <CareersHeader />
        <div className="news">
          <h1 className="news__title" id="news-title">
            Blog
          </h1>
          <div className="news__content">
            <div className="item1 news__posts">
              {cardInfo.map(this.renderCard)}
            </div>
            <div className="item2 news__recent_posts">
              <div>Recents Posts:</div>
              <div>
                {cardInfo
                  .sort((a, b) => (a.date > b.date ? 1 : -1))
                  .map((post, index) => (
                    <button onClick={raiseInvoiceClicked} key={index}>
                      {post.title}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
