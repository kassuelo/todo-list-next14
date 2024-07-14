"use client";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [nome, setNome] = useState<string>("");

  function adicionarTarefa() {
    if (!nome) return;
    setTarefas([...tarefas, nome]);
    setNome("");
  }

  function excluirTarefa(indice: number) {
    setTarefas(tarefas.filter((_, i) => i != indice));
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <label htmlFor="tarefa">Tarefa</label>
        <div className="flex items-center gap-2">
          <input
            id="tarefa"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            onKeyUp={(e) => {
              if (e.key !== "Enter") return;
              adicionarTarefa();
            }}
            className="flex-grow bg-zinc-800 px-4 py-2 rounded-md outline-none text-xl"
          ></input>
          <button
            className="flex gap-2 rounded-md bg-blue-500 py-2 px-4"
            onClick={adicionarTarefa}
          >
            <IconPlus />
            Adicionar
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-black text-zinc-400">Lista de Tarefas</h2>
        <ul className="flex flex-col gap-2">
          {tarefas.map((tarefa, i) => {
            return (
              <li
                key={i}
                className="flex items-center px-4 py-2 bg-zinc-800 p-2 rounded-md"
              >
                <span className="flex-grow">{tarefa}</span>
                <IconTrash
                  size={18}
                  className="text-red-500 cursor-pointer"
                  onClick={() => excluirTarefa(i)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
