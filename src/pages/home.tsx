import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Layout from "../layouts/Layout";
import SectionTitle from "../components/common/SectionTitle";
import axios from "axios";
import WeeklyWeather from "../components/WeeklyWeather";
import SectionContainer from "../components/common/SectionContainer";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import Button from "../components/common/Button";

// const getWeather = async () => {
//   const baseUrl =
//     "	https://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst";

//   try {
//     var queryParams =
//       "?" +
//       encodeURIComponent("serviceKey") +
//       "=" +
//       decodeURIComponent(
//         "gek8RPbGd3Nlum0ifSIl2JPgycgndgi13rGYN6PRr64a6%2B7qwh6uIbHTY7lroKsiGABQ0Q9gmFuoyLwfiSY2DA%3D%3D"
//       );
//     queryParams +=
//       "&" + encodeURIComponent("returnType") + "=" + encodeURIComponent("JSON");
//     queryParams +=
//       "&" + encodeURIComponent("stnId") + "=" + encodeURIComponent("109");
//     queryParams +=
//       "&" +
//       encodeURIComponent("searchCondition") +
//       "=" +
//       encodeURIComponent("HOUR");

//     const res = await axios.get(baseUrl + queryParams);

//     const items = res.data.response.body.items;

//     setItemList(items);

//     setIsLoading(false);
//   } catch (error) {
//     setError(error.code);
//     setIsLoading(false);
//   }
// };

const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout title="THIS WEEK" subTitle="신나는 일주일을 계획합시다!">
      <SectionContainer
        sectionTitle="이번주 날씨"
        sectionContainerClassName="weekly-weather"
        sectionTitleClassName="weekly-weather-title"
      >
        <WeeklyWeather />
      </SectionContainer>

      <SectionContainer
        sectionTitle="이번주 To-Do"
        sectionContainerClassName="weekly-todo"
        sectionTitleClassName="weekly-todo-title"
      >
        <div className="weekly-todo-contents">
          <Button
            buttonClassName="weekly-todo-button"
            onClick={() => navigate("/todo")}
            buttonText="Add To-Do"
            disabled={false}
          />
          <TodoList />
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Home;
