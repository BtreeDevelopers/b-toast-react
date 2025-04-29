export enum TYPE {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export type OptionToast = {
  duration?: number;
  theme?: "light" | "dark";
  type?: TYPE;
  title?: string;
};

export interface ToastApi {
  /**
   * Cria um novo toast na tela
   * @param {string} content Texto exibido no toast
   * @param {object?} option Opções de exibição do toast
   * @return Retorna o id do toast exibido
   */
  show: (content: string, option?: OptionToast) => number;
  /**
   * Limpa todos os toasts da tela
   */
  clear: () => void;
  /**
   * Limpa o toast da tela pelo id
   * @param {number} id Id do toast a ser removido
   */
  dismiss: (id: number) => void;
}

export interface IToast {
  id: number;
  duration: number;
  theme?: "light" | "dark";
  type: TYPE;
  content: string;
  title?: string;
}
export interface ToastPlugin {
  duration?: number;
  theme?: "light" | "dark";
}
