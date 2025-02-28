describe('Automação do fluxo de inscrição no curso', () => {
  
    it('Inscrição no Curso com Sucesso', () => {
  
      // 1. Acessar a URL
      cy.visit('http://cursoskerbeg.com.br');
  
      // 2. Clicar no botão "Catálogo de Cursos" Primeiro reduzo o escopo e depois procuro pelo texto que eu quero e clico para executar.
      cy.get('#ctl-cursos')
        .contains('Catálogo de Cursos').click();
  
      // 3. Selecionar um curso (pode ser necessário ajustar o seletor do curso)
      cy.get('.curso')
        .first()
        .click(); 
  
      // 4. Busquei a classe ao qual o botão pertence e depois validei o texto do botão e cliquei
      cy.get('.ins-cursos')
        .contains('Inscreva-se aqui')
        .click();
  
      // 5. Peguei os Ids dos campos email e senha e preenchi com as informações
      cy.get('#email')
        .type('usuario@example.com'); // Substitua pelo e-mail do usuário
      cy.get('#senha')
        .type('senhaUsuario'); // Substitua pela senha do usuário
  
      // 6. Busquei o Id do botão Logar validei o texto do botão e cliquei
      cy.get('#btn-lg')
        .contains('Logar')
        .click();
  
      // 7. pego o Id da caixa de mensagem e verifico se o Texto Inscrição concluída com sucesso, aproveite o curso esta visivel
      cy.get('#msg-sucesso')
        .contains('Inscrição concluída com sucesso, aproveite o curso')
        .should('be.visible');
    });
  
  });