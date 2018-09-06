const chai = require("chai");
const expect = chai.expect;
const getFunction = require("../index");
const getLinksFromMd = getFunction.getLinksFromMd;


describe ("getLinksFromMd()", () => {

  describe("Quando estiver vazio", () => {
    it("Deveria me retornar um erro", () => {
      let nullNumber = function () { getLinksFromMd( ); };
      expect(nullNumber).to.throw("Erro: parâmetro vazio");
    });
  });

  describe("Quando o texto for um número", () => {
    it("Deveria me retornar um erro", () => {
      let caracterInvalid = function () { getLinksFromMd(65445151516515); };
      expect(caracterInvalid).to.throw("Erro: o parâmetro deve ser uma string");
    });
  });

  describe("Quando o parâmetro é um texto sem links", () =>{
  	it("Deveria me retornar um erro", () => {
  		let textStr = "Socorro gente";
  	expect(getLinksFromMd(textStr)).be.an("array");
     expect(getLinksFromMd(textStr)).be.empty;
  	});
  });

  describe("Quando o texto for uma string e houver uma url", () => {
    it("Deveria me retornar um erro", () => {
      expect(getLinksFromMd("Pesquise no [google] o link(http://www.google.com)")).to.deep.equal([{href:"http://www.google.com",text:"google"}]);
    });
  });

  describe("Quando o parâmetro tem vários links", () => {
 	it("Deveria me retornar um erro", () => {
   		expect(getLinksFromMd("São vários markdowns e vários links: [google] (http://www.google.com), [youtube] (www.youtube.com.br), [hotmail] (https://hotmail.com), [twitter] (http://www.twitter.com.br)")).to.deep.equal([{href:"http://www.google.com",text:"google"},{href:"www.youtube.com.br",text:"youtube"},{href:"https://hotmail.com",text:"hotmail"},{href:"http://www.twitter.com.br",text:"twitter"}]);
    });
  });

});
