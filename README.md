# Future-Skills

Nome dos Integrantes: Gabriel Costa Cutrim, RM: 568059.
Link do deploy: https://future-skills-kappa.vercel.app/

## Descrição do Projeto
Este projeto é um formulário web interativo desenvolvido para o desafio da disciplina de Web Development.  
O formulário simula uma inscrição para o programa FutureSkills, conectando conceitos de desenvolvimento web com o tema O Futuro do Trabalho.
O usuário pode cadastrar:

- Nome completo  
- CPF  
- E-mail  
- Habilidades (pré-definidas ou personalizadas)  
- Interesses (pré-definidos ou personalizados)  

O projeto aplica validações em tempo de submissão, garantindo que os dados preenchidos estejam no formato correto, e exibe um feedback visual interativo.

## Objetivo
Demonstrar o domínio dos seguintes conceitos de desenvolvimento web:

1. Criação e manipulação de funções JavaScript.  
2. Uso e gestão de vetores (arrays).  
3. Técnicas de manipulação de strings.  
4. Acesso e modificação de elementos do DOM usando `document.getElementById()`.  

## Funcionalidades
- Adição dinâmica de habilidades e interesses em listas visuais.  
- Validação de **nome** (mínimo de 5 caracteres).  
- Validação de **CPF** (11 dígitos numéricos).  
- Validação de e-mail (contendo `@` e `.com` ou `.br`).  
- Feedback de **erros ou sucesso** exibido em área dedicada.  
- Interface estilizada com **CSS moderno** e animações suaves.

## Requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari).  
- Não há necessidade de servidor backend, o projeto roda apenas com HTML, CSS e JavaScript.

## Como Executar  
1. Acesse o site pelo link do deploy.  
2. Preencha o formulário com os dados solicitados.  
3. Clique em **Adicionar Habilidade** e **Adicionar Interesse** para registrar itens.  
4. Clique em **Enviar Inscrição** para validar e visualizar o feedback.

## Dependências
- Nenhuma dependência externa.  
- Apenas HTML, CSS e JavaScript puro (vanilla JS).

## Observações Relevantes do Projeto

1. Validação básica mas funcional:

*O projeto valida nome, CPF e e-mail utilizando funções JavaScript.

*O CPF atualmente é validado apenas pelo número de dígitos (11), mas a lógica pode ser expandida para verificação completa usando os dígitos verificadores.

2. Armazenamento em memória usando vetores (arrays):

*Habilidades e interesses são armazenados em arrays durante a execução da página.

*Não há persistência em banco de dados ou arquivos, mas o uso de arrays permite manipulação dinâmica e validação de duplicatas.

3. Interface amigável e interativa:

*O formulário utiliza animações suaves (fadeIn e slideUp) para melhorar a experiência do usuário.

*Feedback visual claro, com cores diferentes para erros (vermelho) e sucesso (verde).

4. Flexibilidade na adição de itens:

*O usuário pode escolher opções pré-definidas ou adicionar interesses/habilidades personalizadas.

*Isso demonstra compreensão de manipulação do DOM e interação dinâmica com elementos HTML.

5. Código modular e organizado:

*Funções específicas para cada tarefa: validação de CPF, validação de e-mail, adição de habilidades/interesses e exibição de feedback.

*Evita repetição de código e facilita manutenção futura.

6. Compatibilidade e portabilidade:

*Funciona em qualquer navegador moderno sem necessidade de servidor.

*Não depende de bibliotecas externas ou frameworks.
