import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from 'react';
import { useRouter } from 'next/router'
import appConfig from "../config.json";

function Titulo(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["050"]};
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}
/* Componente React
function HomePage() {
    // JSX
    return (
        
        <div>
            <GlobalStyle />
            <Title tag="h2">Boas Vindas de volta!</Title>
            <h2>Discord - Alura Matrix</h2>
        </div>

    )
}
  
export default HomePage*/

export default function PaginaInicial() {
  // const username = "GuiACamargo";
  const [username, setUsername] = React.useState("")
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.neutrals[300],
          backgroundImage:
            "url(https://images3.alphacoders.com/940/940934.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              if (username === "") {
                roteamento.push("/error");
              } else {
              roteamento.push(`/chat?username=${username}`);
              }
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Pronto para a próxima aventura?</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>
            
            <TextField
              placeholder="Digite seu usuário do GitHub"
              value={username}
              onChange={function handler (event){
                // Onde ta o valor?
                const valor = event.target.value;
                // Trocar o valor da variavel
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: "#45C0D6",
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            
            <Button
              type="submit"
              label="Entrar na Primeira Área"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: "#45C0D6",
                mainColorLight: "#36aec3",
                mainColorStrong: "#269aaf",
              }}
              
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: "#601016",
              border: "1px solid",
              borderColor: "#570713",
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            
            <Image
              styleSheet={{
                borderRadius: "20%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
