import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import { withRouter } from "next/router";
import React from "react";
import appConfig from "../config.json";
import { createClient } from '@supabase/supabase-js'

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzUwODY5NywiZXhwIjoxOTU5MDg0Njk3fQ.YKUp2Fka2oqkV5qXKQ7LxQyImpn50WwiqfS4U9OrA2w';
const SUPABASE_URL = 'https://cfrsablyylcitgwozpeq.supabase.co';
const supabaseClient = createClient (SUPABASE_URL, SUPABASE_ANON_KEY);

<style>
  @import url('https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap');
</style>

export default function ChatPage() {
  // Sua lógica vai aqui
  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

  React.useEffect(() => {
    supabaseClient
      .from('mensagens')
      .select('*')
      .order('id', {ascending: false})
      .then(({ data }) => {
        setListaDeMensagens(data);
      });

  }, []);
  
  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      // id: listaDeMensagens.length + 1,
      de: "GuiACamargo",
      texto: novaMensagem,
    };

    supabaseClient
      .from('mensagens')
      .insert([
        // tem que ser um objetivo com os MESMOS CAMPOS que você escreveu no supabase
        mensagem
      ])
      .then(({ data }) => {
        setListaDeMensagens([
          data[0], 
          ...listaDeMensagens,
        ]);
      });

    setMensagem("");
  }
  // ./Sua lógica vai aqui
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.neutrals[300],
        backgroundImage: `url(https://i.imgur.com/Cvj7y5g.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens} />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter" && mensagem.length >= 1) {
                  event.preventDefault();

                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                fontSize: "15px",
                width: "90%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
                onClick={() => {
                  if(mensagem.length >= 1) {
    
                    handleNovaMensagem(mensagem);
                  }
                }}
                variant="tertiary"
                label="Enviar"
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: "#45C0D6",
                  mainColorLight: "#36aec3",
                  mainColorStrong: "#269aaf",
                }}
                styleSheet={{
                  boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                  color: appConfig.theme.colors.neutrals[100],
                  backgroundColor: "#269aaf",
                  width: "10%",
                  height: "82%",
                  padding: "6px 8px",
                  marginBottom: "8px",
                }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Ch4t Biome</Text>
        <Button
          variant="tertiary"
          colorVariant="dark"
          label="Voltar ao Lobby"
          href="/"
          styleSheet={{
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            color: appConfig.theme.colors.neutrals[100],
            backgroundColor: "#601016",
          }}
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  console.log(props);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "inline",
                  marginRight: "8px",
                }}
                src={`https://github.com/${mensagem.de}.png`}
              />
              <Text tag="strong"
              styleSheet={{
                fontSize: "18px",
                display: "inline-block",
              }}
              >
                {mensagem.de}
              </Text>
              
              <Text
                styleSheet={{
                  display:"inline-block",
                  fontSize: "11px",
                  marginLeft: "10px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
