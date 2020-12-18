import api from '../api';

describe('Email Masking Test Suite', () =>{
    it('maskEmail function test',() =>{
        let expected = "d****n@domain.hu";
        let actual = api.maskEmail("domain@domain.hu");
        expect(actual).toBe(expected);
    })
});