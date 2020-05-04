import React from 'react';
import { shallow } from 'enzyme';
import useFormHook from '../useFormHook';

// eslint-disable-next-line react/prop-types
const HookWrapper = ({ hook }) => {
  const hookFn = hook ? hook() : undefined;
  return <div hook={hookFn} />;
};

describe('useFormHook', () => {
  it('Should Render', () => {
    const wrapper = shallow(<HookWrapper />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it('Should set init value', () => {
    const initialValues = {
      data: '',
    };
    const wrapper = shallow(
      <HookWrapper hook={() => useFormHook(initialValues, jest.fn())} />
    );
    const { hook } = wrapper.find('div').props();
    const { inputs } = hook;
    expect(inputs.data).toEqual('');
  });
  it('Should update state input', () => {
    const initialValues = {
      data: '',
    };
    const wrapper = shallow(
      <HookWrapper hook={() => useFormHook(initialValues, jest.fn())} />
    );
    const { hook } = wrapper.find('div').props();
    const { inputs, handleInputChange, resetForm } = hook;
    const event = {
      persist: jest.fn(),
      target: {
        name: 'data',
        value: 'value',
      },
    };
    handleInputChange(event, () => expect(inputs.data).toEqual('valor'));
    resetForm();
    expect(inputs).toEqual(initialValues);
  });
  it('Should reset input', () => {
    const initialValues = {
      data: '',
    };
    const wrapper = shallow(
      <HookWrapper hook={() => useFormHook(initialValues, jest.fn())} />
    );
    const { hook } = wrapper.find('div').props();
    const { inputs, handleInputChange, resetForm } = hook;
    const event = {
      persist: jest.fn(),
      target: {
        name: 'data',
        value: 'value',
      },
    };
    handleInputChange(event, () => expect(inputs.data).toEqual('value'));
    resetForm();
    expect(inputs).toEqual(initialValues);
  });
  it('Should update state input', () => {
    const initialValues = {
      data: '',
    };
    const callback = jest.fn();
    const wrapper = shallow(
      <HookWrapper hook={() => useFormHook(initialValues, callback)} />
    );
    const { hook } = wrapper.find('div').props();
    const { handleInputChange, handleSubmit } = hook;
    const event = {
      persist: jest.fn(),
      target: {
        name: 'data',
        value: 'value',
      },
      preventDefault: jest.fn(),
    };
    handleInputChange(event, () => {
      expect(handleSubmit(event)).toHaveBeenCalledWith(callback);
    });
  });
});
