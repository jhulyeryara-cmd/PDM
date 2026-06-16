import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";
import { useRouter, useLocalSearchParams } from "expo-router";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],

  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],

  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],

  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],

  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

export default function DataHora() {
  const rota = useRouter();

  const params = useLocalSearchParams();

  const servico = params.servico as string || "Não informado";
  const pagamento = params.pagamento as string || "Não informado";

  const [dataSelecionada, setDataSelecionada] = useState("");
  const [horarioSelecionado, setHorarioSelecionado] = useState("");

  const horarios = [
    "08:30",
    "13:00",
    "14:00",
  ];

  function continuar() {

    if (!dataSelecionada || !horarioSelecionado) {
      Alert.alert(
        "Aviso",
        "Selecione uma data e um horário."
      );

      return;
    }

    rota.push({
      pathname: "/confirmacao",

      params: {
        data: dataSelecionada,
        horario: horarioSelecionado,
        servico: servico,
        pagamento: pagamento,
      },
    });
  }

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Data & Hora
      </Text>

      <Text style={styles.subtitulo}>
        Quando você prefere?
      </Text>

      <Calendar
        minDate={new Date().toISOString().split("T")[0]}

        onDayPress={(dia) => {
          setDataSelecionada(dia.dateString);
        }}

        markedDates={{
          [dataSelecionada]: {
            selected: true,
            selectedColor: "#7B84A6",
          },
        }}

        theme={{
          todayTextColor: "#7B84A6",
          arrowColor: "#7B84A6",
          selectedDayBackgroundColor: "#7B84A6",
        }}
      />

      <Text style={styles.horarioTitulo}>
        Horários disponíveis
      </Text>

      <View style={styles.gradeHorarios}>

        {horarios.map((horario) => (

          <TouchableOpacity
            key={horario}

            style={[
              styles.botaoHorario,

              horarioSelecionado === horario &&
                styles.botaoHorarioSelecionado,
            ]}

            onPress={() => setHorarioSelecionado(horario)}
          >

            <Text
              style={[
                styles.textoHorario,

                horarioSelecionado === horario &&
                  styles.textoHorarioSelecionado,
              ]}
            >
              {horario}
            </Text>

          </TouchableOpacity>
        ))}

      </View>

      <TouchableOpacity
        style={styles.botaoProximo}
        onPress={continuar}
      >

        <Text style={styles.textoProximo}>
          Próximo
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#E9EDF8",
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27304D",
    marginTop: 40,
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "600",
    color: "#27304D",
    marginBottom: 15,
  },

  horarioTitulo: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#27304D",
  },

  gradeHorarios: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  botaoHorario: {
    width: "30%",
    backgroundColor: "#FFF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  botaoHorarioSelecionado: {
    backgroundColor: "#7B84A6",
  },

  textoHorario: {
    color: "#27304D",
    fontWeight: "600",
  },

  textoHorarioSelecionado: {
    color: "#FFF",
  },

  botaoProximo: {
    backgroundColor: "#7B84A6",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 40,
  },

  textoProximo: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});