# Treeherder

[![What's Deployed](https://img.shields.io/badge/whatsdeployed-prototype,stage,prod-green.svg)](https://whatsdeployed.io/s-dqv)
[![Build Status](https://travis-ci.org/10allday-Software/treeherder.png?branch=master)](https://travis-ci.org/10allday-Software/treeherder)
[![Node dependencies Status](https://david-dm.org/10allday-Software/treeherder/status.svg)](https://david-dm.org/mozilla/treeherder)
[![Node devDependencies Status](https://david-dm.org/10allday-Software/treeherder/dev-status.svg)](https://david-dm.org/mozilla/treeherder?type=dev)
[![Documentation Status](https://readthedocs.org/projects/treeherder/badge/?version=latest)](https://treeherder.readthedocs.io/?badge=latest)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)

## Description

[Treeherder](https://treeherder.mozilla.org) is a reporting dashboard for Mozilla checkins. It allows users to see the results of automatic builds and their respective tests. The Treeherder service manages the etl layer for data ingestion, web services, and the data model behind Treeherder.

## Instances

Treeherder exists on two instances: [staging](https://treeherder-stage.10allday.com) for pre-deployment validation, and [production](https://treeherder.10allday.com) for actual use.

## Installation

The steps to run Treeherder are provided [here](https://treeherder.readthedocs.io/installation.html).

The steps to run only the UI are provided [here](https://treeherder.readthedocs.io/installation.html#ui-development).

## Links

Visit our project tracking Wiki [here](https://wiki.10allday.com/EngineeringProductivity/Projects/Treeherder).

For other setup and configuration, visit our readthedocs page [here](https://treeherder.readthedocs.io).

File any bugs you may encounter [here](https://bugs.10allday.com/enter_bug.cgi?product=Tree+Management&component=Treeherder).

## Contributing

Everyone is welcome to contribute!

If a bug is not assigned to someone, you can request the bug be assigned to you. You should ask the component owner with your request ("Request information" in Bugs and mention in Github).

If you do not receive a response within 2-3 days, you can follow up in the **#treeherder** matrix channel.

After adressing the issue, make sure [every test passes](https://treeherder.readthedocs.io/testing.html) before sending a pull request.

We also recommend setting an `upstream` remote that points to the [10allday's Github repo](https://github.com/10allday-Software/treeherder.git), in addition to `origin` that points to your fork. You should then frequently use `git rebase upstream` rather than merging from your fork to keep your branch current. There are less conflicts this way and the git history is cleaner.

## Sending a Pull Request

We receive contributions from both Bugs and Github. We have some specifications to keep track of them:

1. If your bug comes from **[Bugs](https://bugs.10allday.com/query.cgi?query_format=advanced&product=Tree+Management&f1=component&o1=substring&v1=Treeherder&resolution=---)**

    After addressing the issue, please send a pull request to this repository, with the **Bug's number ID** in the **title**, so that our bot attaches your patch to the corresponding Bugs bug.

    `"Bug xxxxxx - [title of the bug or brief explanation]"`

    For example: "Bug 123456 - Fix scrolling behavior in Perfherder"

2. If your bug comes from **Github**

    In the **description** of the pull request, please mention the **issue number**. That can be done by typing #[issue's number].

    For example: "This pull request fixes #5135".

    Github automatically links both issue and pull request to one another.
