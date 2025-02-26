import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slices/taskSlice";

const getRandomInterval = () => Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;

const getRandomPriority = (): "low" | "medium" | "high" => {
  return ["low", "medium", "high"][Math.floor(Math.random() * 3)] as "low" | "medium" | "high";
};

const AutoTaskGenerator: React.FC = () => {
  const dispatch = useDispatch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scheduleNextTask = () => {
      const interval = getRandomInterval();
      timeoutRef.current = setTimeout(() => {
        dispatch(
          addTask({
            title: `Задача ${Math.floor(Math.random() * 1000)}`,
            description: "Автоматически сгенерированная задача",
            priority: getRandomPriority(),
            createdAt: Date.now(),
          })
        );
        scheduleNextTask(); // Запускаем следующее добавление задачи после истечения таймера
      }, interval);
    };

    scheduleNextTask(); // Запускаем первую задачу после первого интервала

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dispatch]);

  return null;
};

export default AutoTaskGenerator;