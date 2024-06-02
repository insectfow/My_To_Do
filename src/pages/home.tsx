import { FC } from "react";
import Layout from "../layouts/Layout";
import WeeklyWeather from "../components/WeeklyWeather";
import SectionContainer from "../components/common/SectionContainer";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import Button from "../components/common/Button";

const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout title="THIS WEEK" subTitle="신나는 일주일을 계획합시다!">
      {/* weeklyWeather */}
      <SectionContainer
        sectionTitle="이번주 날씨"
        sectionContainerClassName="weekly-weather"
        sectionTitleClassName="weekly-weather-title"
      >
        <WeeklyWeather />
      </SectionContainer>

      {/* to-do list */}
      <SectionContainer
        sectionTitle="이번주 To-Do"
        sectionContainerClassName="weekly-todo"
        sectionTitleClassName="weekly-todo-title"
      >
        <div className="weekly-todo-contents">
          <Button
            buttonClassName="weekly-todo-button"
            onClick={() => navigate("/todo/new")}
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
