/**
 * @summary
 * 建模
 *
 * @summary
 * 业务字段：告诉模型你需要做的事件是什么
 *
 * @actions
 * 事件：即将发生的事件，需要做的事情
 *
 * @options
 * 逻辑：提供业务层 处理 数据的逻辑
 *
 * @service
 * 业务处理：根据 业务字段 通过 逻辑 做 业务处理
 */
// 业务字段
const PLUS = "PLUS"; // +
const MINUS = "MINUS"; // -

// 业务模型
class Counter {
  // 异常
  ThrowErrorFun = new ThrowError();

  // 业务字段
  actions = {
    PLUS,
    MINUS
  };

  // 业务调度处理 业务层
  service(ctx) {
    const { plus, minus } = this.options(ctx.$data);

    return (type, ...args) => {
      try {
        switch (type) {
          case this.actions.PLUS:
            ctx.result = plus(...args);
            break;
          case this.actions.MINUS:
            ctx.result = minus(...args);
            break;
        }
      } catch (error) {
        this.ThrowErrorFun.printErrorMessage(error);
      }
    };
  }

  // 逻辑支持
  options(data) {
    const plus = () => {
      const { result } = data;

      return result + 1;
    };

    const minus = () => {
      const { result } = data;

      return result - 1;
    };

    return { plus, minus };
  }
}
class ThrowError {
  // 异常处理
  throwError(message, fileName) {
    throw new Error(message, fileName);
  }

  // 打印异常
  printErrorMessage(error) {
    console.error(`
    错误信息：${error.message}，
    错误文件：${error.fileName}`);
  }
}

export { Counter, ThrowError };
