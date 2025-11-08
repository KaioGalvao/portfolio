import { createContext, useContext, useMemo, useState } from "react";

type ProjectsFilterContextType = {
  query: string;
  setQuery: (q: string) => void;
};

const ProjectsFilterContext = createContext<ProjectsFilterContextType | undefined>(undefined);

export const ProjectsFilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const value = useMemo(() => ({ query, setQuery }), [query]);
  return <ProjectsFilterContext.Provider value={value}>{children}</ProjectsFilterContext.Provider>;
};

export const useProjectsFilter = () => {
  const ctx = useContext(ProjectsFilterContext);
  if (!ctx) throw new Error("useProjectsFilter must be used within ProjectsFilterProvider");
  return ctx;
};
