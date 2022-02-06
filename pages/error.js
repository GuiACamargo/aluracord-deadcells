import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import { useRouter, withRouter } from "next/router";
import React from "react";
import appConfig from "../config.json";

export default function error() {
    const roteamento = useRouter();

    return (
        <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.neutrals[300],
          backgroundImage:
            "url(https://i.imgur.com/Cvj7y5g.png)",
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
                <Box
                styleSheet={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: "100%", sm: "100%" },
                    textAlign: "center",
                    marginBottom: "32px",
                }}>
                <Text
                styleSheet={{
                    fontSize: "32px",
                    marginBottom: "20px",
                    color: appConfig.theme.colors.neutrals[100],
                    alignItems: "center",
                    display: "inline-block"
                }}
                >
                    Algo de Inesperado Aconteceu, Tente Novamente!
                </Text>
                <Text
                styleSheet={{
                    marginBottom: "15px",
                    fontSize: "20px",
                    color: appConfig.theme.colors.neutrals[300],
                }}
                >
                    Possiveis Erros:
                </Text>
                <Text
                styleSheet={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    color: appConfig.theme.colors.neutrals[300],
                }}
                >
                    🔹 Espaço vazio no login
                </Text>
                <Text
                styleSheet={{
                    marginBottom: "30px",
                    fontSize: "20px",
                    color: appConfig.theme.colors.neutrals[300],
                }}
                >
                    🔹 Usuário inválido
                </Text>
                <Button
                    label="Voltar ao Lobby"
                    href="/"
                    buttonColors={{
                        contrastColor: appConfig.theme.colors.neutrals["000"],
                        mainColor: "#45C0D6",
                        mainColorLight: "#36aec3",
                        mainColorStrong: "#269aaf",
                    }}
                    styleSheet={{
                        color: appConfig.theme.colors.neutrals[100],
                    }}
                />
                </Box>
            </Box>
        </Box>
    )
}