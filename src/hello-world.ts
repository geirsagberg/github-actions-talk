import * as core from "@actions/core";
import * as github from "@actions/github";

function run() {
  try {
    core.info(`Hello ${core.getInput("name")}!
      From ${github.context.job}`);
  } catch (error: any) {
    core.setFailed(error);
  }
}

void run();
