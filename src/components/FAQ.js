import React, { Component } from 'react';
import '../styles/Blog.css';
import { Card, CardText, CardBody, } from 'reactstrap';

class FAQ extends Component {
    render() {
        return(
            <div>
               <div className="my-5 container blog">
                    <h2 className="blog-title mb-5">Frequently Asked Questions</h2>
                    <Card className="my-5">
                        <CardBody className="w-75">
                        <CardText><strong>1. I would like to become a good programmer, what should I do?</strong></CardText>
                        <CardText>Start by taking a language you like (C#, JavaScript, Python etc.) and then spend some time every day programming and reading about programming. Feel free to reach out if you have any questions along the way (email: <a href="mailto:alex@letscodewithalex.com">alex@letscodewithalex.com</a>.)</CardText>
                        <br></br><br></br>
                        <CardText><strong>2. I am totally new in coding, where should I start?</strong></CardText>
                        <CardText>Go to repl.it and open a code editor in the language of your choice. Play around until you get bored. Write down your questions and send them to us: email: <a href="mailto:alex@letscodewithalex.com">alex@letscodewithalex.com</a>.</CardText>
                        <br></br><br></br>
                        <CardText><strong>3. I want to have a career in programming. What programming language should I learn?</strong></CardText>
                        <CardText>If you are just starting pick a language that you find easy (Python, JavaScript might be a good choice). Once you are comfortable with the basics specialise in a language that is in high demand at that specific time. Right now, the current trends are Java, Python, JavaScript, C#.</CardText>
                        <br></br><br></br>
                        <CardText><strong>4. I am interested in programming, could you share your valuable experience with me?</strong></CardText>
                        <CardText>Yes, I would love to, we organise a 30 minutes free session on Thursdays at 6pm EST time (I&rsquo;m based in North Carolina, USA). The purpose of this session is to get to know your objectives and you have the chance to ask questions. Send us your Skype ID to <a href="mailto:alex@letscodewithalex.com">alex@letscodewithalex.com</a> and we will call you on Thursday.</CardText>
                        <br></br><br></br>
                        <CardText><strong>5. I am currently a student and I have an assignment at university, could you help me with it?</strong></CardText>
                        <CardText>I would be happy to spend time with you to help you understand how to complete the assignment. So, do not hesitate to join us on our 30 minutes free session on Thursdays at 6pm EST time (I&rsquo;m based in North Carolina, USA). The purpose of this session is to get to know your objectives and you have the chance to ask questions. Send us your Skype ID to <a href="mailto:alex@letscodewithalex.com">alex@letscodewithalex.com</a> and we will call you on Thursday.</CardText>
                        <br></br><br></br>
                        <CardText><strong>6. I am studying programming and my exams are coming up. How could I better prepare and feel more relaxed?</strong></CardText>
                        <CardText>Think of your past successes and how you managed to overcome those challenging situations and imagine yourself doing it again. If you have questions that are challenging do not hesitate to join us on our 30 minutes free session on Thursdays at 6pm EST time (I&rsquo;m based in North Carolina, USA). The purpose of this session is to get to know your objectives and you have the chance to ask questions. Send us your Skype ID to <a href="mailto:alex@letscodewithalex.com">alex@letscodewithalex.com</a> and we will call you on Thursday.</CardText>
                        <br></br><br></br>
                        <CardText><strong>7. I would be interested to talk to you more, where are you from and how can I get in touch?</strong></CardText>
                        <CardText>I am located in North Carolina, USA. You can drop me a message on facebook.com/LetsCodeWithAlex/ and we can talk more.</CardText>
                        <br></br><br></br>
                        <CardText><strong>8. I am interested in learning how to program, can you tell me more about your training and what programming language do you teach?</strong></CardText>
                        <CardText>I have been programming for over 20 years and I like teaching programming to others as well. I have a Master&rsquo;s in computer science and I have worked with a wide variety of technologies on many different projects. Over my career I have used: Java, C/C++/C#, Python, JavaScript, Visual Basic, PHP, Sql, Delphi, Ruby, Perl and others.<br></br><br></br> I can help you learn how to program in any language you might need.
                        We organise LCWA 101: Programming Fundamentals Workshop. It&rsquo;s 8 sessions online live with me. The purpose is to get to understand basics so that you can approach more advanced topics. The cost is $249 and you can let us know if you are interested in finding out more about the syllabus by sending an email to <a href="mailto:alex@letscodewithalex.com">alex@letscodewithalex.com</a>.</CardText>
                        <br></br><br></br>
                        <CardText><strong>9. I would be interested in taking a one on one session with you, how much does it cost and how is organised?</strong></CardText>
                        <CardText>Meetings are organised, online on Skype and it costs $50/hour.</CardText>
                        <br></br><br></br>
                        <CardText><strong>10. What programming languages do you teach?</strong></CardText>
                        <CardText>Over my career I have used: Java, C/C++/C#, Python, JavaScript, Visual Basic, PHP, Sql, Delphi, Ruby, Perl and others. I can help you learn how to program in any language you might need.</CardText>                    
                    </CardBody>
                    </Card>
                    <Card className="my-5">
                    <CardBody className="w-75">
                        <CardText></CardText>
                        
                    </CardBody>
                    
                    </Card>
                </div>
          </div>
        );
    }
}

export default FAQ;