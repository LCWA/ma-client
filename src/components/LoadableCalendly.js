import Loadable from 'react-loadable';
import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Section, Title, Article, Prop, list } from './generic.js';


const LoadableComponent = Loadable({
    loader: () => import('./Calendly'),
    loading() {
        return (
        <Section>
        <Title>Calendly Loading</Title>,
        {list.map(l => (
          <Article key={l.prop}>
            <ReactLoading type={l.prop} color="#fff" />
            <Prop>{l.name}</Prop>
          </Article>
        ))}
        </Section>
        );
    }
});

export default class LoadableCalendly extends Component {
    render() {
        return <LoadableComponent/>;
    }
}