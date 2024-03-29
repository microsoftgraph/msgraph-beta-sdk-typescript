/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createKeyValuePairFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, deserializeIntoEntity, serializeBaseCollectionPaginationCountResponse, serializeEntity, serializeKeyValuePair, type BaseCollectionPaginationCountResponse, type Entity, type KeyValuePair } from '../';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export type AggregationType = (typeof AggregationTypeObject)[keyof typeof AggregationTypeObject];
export interface AlertImpact extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The aggregation type of the impact. The possible values are: count, percentage, affectedCloudPcCount, affectedCloudPcPercentage, unknownFutureValue.
     */
    aggregationType?: AggregationType;
    /**
     * The detail information of the impact. For example, if the Frontline Cloud PCs near concurrency limit alert is triggered, the details contain the impacted Frontline license SKU name, such as Windows 365 Frontline 2 vCPU/8GB/128GB, and the corresponding impacted value.
     */
    alertImpactDetails?: KeyValuePair[];
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The OdataType property
     */
    odataType?: string;
    /**
     * The number value of the impact. For the aggregation types of count and affectedCloudPcCount, the value indicates the number of affected instances. For example, 6 affectedCloudPcCount means that six Cloud PCs are affected. For the aggregation types of percentage and affectedCloudPcPercentage, the value indicates the percent of affected instances. For example, 12 affectedCloudPcPercentage means that 12% of Cloud PCs are affected.
     */
    value?: number;
}
export interface AlertRecord extends Entity, Parsable {
    /**
     * The impact of the alert event. Consists of a list of key-value pair and a number followed by the aggregation type. For example, 6 affectedCloudPcCount means that 6 Cloud PCs are affected. 12 affectedCloudPcPercentage means 12% of Cloud PCs are affected. The list of key-value pair indicates the details of the alert impact.
     */
    alertImpact?: AlertImpact;
    /**
     * The corresponding ID of the alert rule.
     */
    alertRuleId?: string;
    /**
     * The rule template of the alert event. The possible values are: cloudPcProvisionScenario, cloudPcImageUploadScenario, cloudPcOnPremiseNetworkConnectionCheckScenario, unknownFutureValue, cloudPcInGracePeriodScenario. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values from this evolvable enum: cloudPcInGracePeriodScenario.
     */
    alertRuleTemplate?: AlertRuleTemplate;
    /**
     * The date and time when the alert event was detected. The Timestamp type represents date and time information using ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    detectedDateTime?: Date;
    /**
     * The display name of the alert record.
     */
    displayName?: string;
    /**
     * The date and time when the alert record was last updated. The Timestamp type represents date and time information using ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    lastUpdatedDateTime?: Date;
    /**
     * The date and time when the alert event was resolved. The Timestamp type represents date and time information using ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    resolvedDateTime?: Date;
    /**
     * The severity of the alert event. The possible values are: unknown, informational, warning, critical, unknownFutureValue.
     */
    severity?: RuleSeverityType;
    /**
     * The status of the alert record. The possible values are: active, resolved, unknownFutureValue.
     */
    status?: AlertStatusType;
}
export interface AlertRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AlertRecord[];
}
export interface AlertRule extends Entity, Parsable {
    /**
     * The rule template of the alert event. The possible values are: cloudPcProvisionScenario, cloudPcImageUploadScenario, cloudPcOnPremiseNetworkConnectionCheckScenario, cloudPcInGracePeriodScenario, cloudPcFrontlineInsufficientLicensesScenario, cloudPcInaccessibleScenario. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values from this evolvable enum: cloudPcInGracePeriodScenario.
     */
    alertRuleTemplate?: AlertRuleTemplate;
    /**
     * The conditions that determine when to send alerts. For example, you can configure a condition to send an alert when provisioning fails for six or more Cloud PCs.
     */
    conditions?: RuleCondition[];
    /**
     * The rule description.
     */
    description?: string;
    /**
     * The display name of the rule.
     */
    displayName?: string;
    /**
     * The status of the rule that indicates whether the rule is enabled or disabled. If true, the rule is enabled; otherwise, the rule is disabled.
     */
    enabled?: boolean;
    /**
     * Indicates whether the rule is a system rule. If true, the rule is a system rule; otherwise, the rule is a custom-defined rule and can be edited. System rules are built in and only a few properties can be edited.
     */
    isSystemRule?: boolean;
    /**
     * The notification channels of the rule selected by the user.
     */
    notificationChannels?: NotificationChannel[];
    /**
     * The severity of the rule. The possible values are: unknown, informational, warning, critical, unknownFutureValue.
     */
    severity?: RuleSeverityType;
    /**
     * The conditions that determine when to send alerts. For example, you can configure a condition to send an alert when provisioning fails for six or more Cloud PCs. This property is deprecated. Use conditions instead.
     */
    threshold?: RuleThreshold;
}
export interface AlertRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AlertRule[];
}
export type AlertRuleTemplate = (typeof AlertRuleTemplateObject)[keyof typeof AlertRuleTemplateObject];
export type AlertStatusType = (typeof AlertStatusTypeObject)[keyof typeof AlertStatusTypeObject];
export type ConditionCategory = (typeof ConditionCategoryObject)[keyof typeof ConditionCategoryObject];
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AlertImpact}
 */
export function createAlertImpactFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAlertImpact;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AlertRecordCollectionResponse}
 */
export function createAlertRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAlertRecordCollectionResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AlertRecord}
 */
export function createAlertRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAlertRecord;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AlertRuleCollectionResponse}
 */
export function createAlertRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAlertRuleCollectionResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AlertRule}
 */
export function createAlertRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAlertRule;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Monitoring}
 */
export function createMonitoringFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoMonitoring;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {NotificationChannel}
 */
export function createNotificationChannelFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoNotificationChannel;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {NotificationReceiver}
 */
export function createNotificationReceiverFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoNotificationReceiver;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {PortalNotification}
 */
export function createPortalNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPortalNotification;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RuleCondition}
 */
export function createRuleConditionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRuleCondition;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RuleThreshold}
 */
export function createRuleThresholdFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRuleThreshold;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAlertImpact(alertImpact: Partial<AlertImpact> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregationType": n => { alertImpact.aggregationType = n.getEnumValue<AggregationType>(AggregationTypeObject); },
        "alertImpactDetails": n => { alertImpact.alertImpactDetails = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        "backingStoreEnabled": n => { alertImpact.backingStoreEnabled = true; },
        "@odata.type": n => { alertImpact.odataType = n.getStringValue(); },
        "value": n => { alertImpact.value = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAlertRecord(alertRecord: Partial<AlertRecord> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(alertRecord),
        "alertImpact": n => { alertRecord.alertImpact = n.getObjectValue<AlertImpact>(createAlertImpactFromDiscriminatorValue); },
        "alertRuleId": n => { alertRecord.alertRuleId = n.getStringValue(); },
        "alertRuleTemplate": n => { alertRecord.alertRuleTemplate = n.getEnumValue<AlertRuleTemplate>(AlertRuleTemplateObject); },
        "detectedDateTime": n => { alertRecord.detectedDateTime = n.getDateValue(); },
        "displayName": n => { alertRecord.displayName = n.getStringValue(); },
        "lastUpdatedDateTime": n => { alertRecord.lastUpdatedDateTime = n.getDateValue(); },
        "resolvedDateTime": n => { alertRecord.resolvedDateTime = n.getDateValue(); },
        "severity": n => { alertRecord.severity = n.getEnumValue<RuleSeverityType>(RuleSeverityTypeObject); },
        "status": n => { alertRecord.status = n.getEnumValue<AlertStatusType>(AlertStatusTypeObject); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAlertRecordCollectionResponse(alertRecordCollectionResponse: Partial<AlertRecordCollectionResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(alertRecordCollectionResponse),
        "value": n => { alertRecordCollectionResponse.value = n.getCollectionOfObjectValues<AlertRecord>(createAlertRecordFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAlertRule(alertRule: Partial<AlertRule> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(alertRule),
        "alertRuleTemplate": n => { alertRule.alertRuleTemplate = n.getEnumValue<AlertRuleTemplate>(AlertRuleTemplateObject); },
        "conditions": n => { alertRule.conditions = n.getCollectionOfObjectValues<RuleCondition>(createRuleConditionFromDiscriminatorValue); },
        "description": n => { alertRule.description = n.getStringValue(); },
        "displayName": n => { alertRule.displayName = n.getStringValue(); },
        "enabled": n => { alertRule.enabled = n.getBooleanValue(); },
        "isSystemRule": n => { alertRule.isSystemRule = n.getBooleanValue(); },
        "notificationChannels": n => { alertRule.notificationChannels = n.getCollectionOfObjectValues<NotificationChannel>(createNotificationChannelFromDiscriminatorValue); },
        "severity": n => { alertRule.severity = n.getEnumValue<RuleSeverityType>(RuleSeverityTypeObject); },
        "threshold": n => { alertRule.threshold = n.getObjectValue<RuleThreshold>(createRuleThresholdFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAlertRuleCollectionResponse(alertRuleCollectionResponse: Partial<AlertRuleCollectionResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(alertRuleCollectionResponse),
        "value": n => { alertRuleCollectionResponse.value = n.getCollectionOfObjectValues<AlertRule>(createAlertRuleFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoMonitoring(monitoring: Partial<Monitoring> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(monitoring),
        "alertRecords": n => { monitoring.alertRecords = n.getCollectionOfObjectValues<AlertRecord>(createAlertRecordFromDiscriminatorValue); },
        "alertRules": n => { monitoring.alertRules = n.getCollectionOfObjectValues<AlertRule>(createAlertRuleFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoNotificationChannel(notificationChannel: Partial<NotificationChannel> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { notificationChannel.backingStoreEnabled = true; },
        "notificationChannelType": n => { notificationChannel.notificationChannelType = n.getEnumValue<NotificationChannelType>(NotificationChannelTypeObject); },
        "notificationReceivers": n => { notificationChannel.notificationReceivers = n.getCollectionOfObjectValues<NotificationReceiver>(createNotificationReceiverFromDiscriminatorValue); },
        "@odata.type": n => { notificationChannel.odataType = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoNotificationReceiver(notificationReceiver: Partial<NotificationReceiver> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { notificationReceiver.backingStoreEnabled = true; },
        "contactInformation": n => { notificationReceiver.contactInformation = n.getStringValue(); },
        "locale": n => { notificationReceiver.locale = n.getStringValue(); },
        "@odata.type": n => { notificationReceiver.odataType = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoPortalNotification(portalNotification: Partial<PortalNotification> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "alertImpact": n => { portalNotification.alertImpact = n.getObjectValue<AlertImpact>(createAlertImpactFromDiscriminatorValue); },
        "alertRecordId": n => { portalNotification.alertRecordId = n.getStringValue(); },
        "alertRuleId": n => { portalNotification.alertRuleId = n.getStringValue(); },
        "alertRuleName": n => { portalNotification.alertRuleName = n.getStringValue(); },
        "alertRuleTemplate": n => { portalNotification.alertRuleTemplate = n.getEnumValue<AlertRuleTemplate>(AlertRuleTemplateObject); },
        "backingStoreEnabled": n => { portalNotification.backingStoreEnabled = true; },
        "id": n => { portalNotification.id = n.getStringValue(); },
        "isPortalNotificationSent": n => { portalNotification.isPortalNotificationSent = n.getBooleanValue(); },
        "@odata.type": n => { portalNotification.odataType = n.getStringValue(); },
        "severity": n => { portalNotification.severity = n.getEnumValue<RuleSeverityType>(RuleSeverityTypeObject); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoRuleCondition(ruleCondition: Partial<RuleCondition> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregation": n => { ruleCondition.aggregation = n.getEnumValue<AggregationType>(AggregationTypeObject); },
        "backingStoreEnabled": n => { ruleCondition.backingStoreEnabled = true; },
        "conditionCategory": n => { ruleCondition.conditionCategory = n.getEnumValue<ConditionCategory>(ConditionCategoryObject); },
        "@odata.type": n => { ruleCondition.odataType = n.getStringValue(); },
        "operator": n => { ruleCondition.operator = n.getEnumValue<OperatorType>(OperatorTypeObject); },
        "relationshipType": n => { ruleCondition.relationshipType = n.getEnumValue<RelationshipType>(RelationshipTypeObject); },
        "thresholdValue": n => { ruleCondition.thresholdValue = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoRuleThreshold(ruleThreshold: Partial<RuleThreshold> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregation": n => { ruleThreshold.aggregation = n.getEnumValue<AggregationType>(AggregationTypeObject); },
        "backingStoreEnabled": n => { ruleThreshold.backingStoreEnabled = true; },
        "@odata.type": n => { ruleThreshold.odataType = n.getStringValue(); },
        "operator": n => { ruleThreshold.operator = n.getEnumValue<OperatorType>(OperatorTypeObject); },
        "target": n => { ruleThreshold.target = n.getNumberValue(); },
    }
}
export interface Monitoring extends Entity, Parsable {
    /**
     * The collection of records of alert events.
     */
    alertRecords?: AlertRecord[];
    /**
     * The collection of alert rules.
     */
    alertRules?: AlertRule[];
}
export interface NotificationChannel extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The type of the notification channel. The possible values are: portal, email, phoneCall, sms, unknownFutureValue.
     */
    notificationChannelType?: NotificationChannelType;
    /**
     * Information about the notification receivers, such as locale and contact information. For example, en-us for locale and serena.davis@contoso.com for contact information.
     */
    notificationReceivers?: NotificationReceiver[];
    /**
     * The OdataType property
     */
    odataType?: string;
}
export type NotificationChannelType = (typeof NotificationChannelTypeObject)[keyof typeof NotificationChannelTypeObject];
export interface NotificationReceiver extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The contact information about the notification receivers, such as an email address. Currently, only email and portal notifications are supported. For portal notifications, contactInformation can be left blank. For email notifications, contactInformation consists of an email address such as serena.davis@contoso.com.
     */
    contactInformation?: string;
    /**
     * Defines the language and format in which the notification will be sent. Supported locale values are: en-us, cs-cz, de-de, es-es, fr-fr, hu-hu, it-it, ja-jp, ko-kr, nl-nl, pl-pl, pt-br, pt-pt, ru-ru, sv-se, tr-tr, zh-cn, zh-tw.
     */
    locale?: string;
    /**
     * The OdataType property
     */
    odataType?: string;
}
export type OperatorType = (typeof OperatorTypeObject)[keyof typeof OperatorTypeObject];
export interface PortalNotification extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The associated alert impact.
     */
    alertImpact?: AlertImpact;
    /**
     * The associated alert record ID.
     */
    alertRecordId?: string;
    /**
     * The associated alert rule ID.
     */
    alertRuleId?: string;
    /**
     * The associated alert rule name.
     */
    alertRuleName?: string;
    /**
     * The associated alert rule template. The possible values are: cloudPcProvisionScenario, cloudPcImageUploadScenario, cloudPcOnPremiseNetworkConnectionCheckScenario, unknownFutureValue, cloudPcInGracePeriodScenario. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values from this evolvable enum: cloudPcInGracePeriodScenario.
     */
    alertRuleTemplate?: AlertRuleTemplate;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The unique identifier for the portal notification.
     */
    id?: string;
    /**
     * true if the portal notification has already been sent to the user; false otherwise.
     */
    isPortalNotificationSent?: boolean;
    /**
     * The OdataType property
     */
    odataType?: string;
    /**
     * The associated alert rule severity. The possible values are: unknown, informational, warning, critical, unknownFutureValue.
     */
    severity?: RuleSeverityType;
}
export type RelationshipType = (typeof RelationshipTypeObject)[keyof typeof RelationshipTypeObject];
export interface RuleCondition extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The built-in aggregation method for the rule condition. The possible values are: count, percentage, affectedCloudPcCount, affectedCloudPcPercentage, unknownFutureValue.
     */
    aggregation?: AggregationType;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The property that the rule condition monitors. Possible values are:  provisionFailures, imageUploadFailures, azureNetworkConnectionCheckFailures, cloudPcInGracePeriod, frontlineInsufficientLicenses, cloudPcConnectionErrors, cloudPcHostHealthCheckFailures, cloudPcZoneOutage, unknownFutureValue.
     */
    conditionCategory?: ConditionCategory;
    /**
     * The OdataType property
     */
    odataType?: string;
    /**
     * The built-in operator for the rule condition. The possible values are: greaterOrEqual, equal, greater, less, lessOrEqual, notEqual, unknownFutureValue.
     */
    operator?: OperatorType;
    /**
     * The relationship type.  Possible values are: and, or.
     */
    relationshipType?: RelationshipType;
    /**
     * The threshold value of the alert condition. The threshold value can be a number in string form or string like 'WestUS'.
     */
    thresholdValue?: string;
}
export type RuleSeverityType = (typeof RuleSeverityTypeObject)[keyof typeof RuleSeverityTypeObject];
export interface RuleThreshold extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates the built-in aggregation methods. The possible values are: count, percentage, affectedCloudPcCount, affectedCloudPcPercentage, unknownFutureValue.
     */
    aggregation?: AggregationType;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The OdataType property
     */
    odataType?: string;
    /**
     * Indicates the built-in operator. The possible values are: greaterOrEqual, equal, greater, less, lessOrEqual, notEqual, unknownFutureValue.
     */
    operator?: OperatorType;
    /**
     * The target threshold value.
     */
    target?: number;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAlertImpact(writer: SerializationWriter, alertImpact: Partial<AlertImpact> | undefined = {}) : void {
    writer.writeEnumValue<AggregationType>("aggregationType", alertImpact.aggregationType);
    writer.writeCollectionOfObjectValues<KeyValuePair>("alertImpactDetails", alertImpact.alertImpactDetails, serializeKeyValuePair);
    writer.writeStringValue("@odata.type", alertImpact.odataType);
    writer.writeNumberValue("value", alertImpact.value);
    writer.writeAdditionalData(alertImpact.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAlertRecord(writer: SerializationWriter, alertRecord: Partial<AlertRecord> | undefined = {}) : void {
    serializeEntity(writer, alertRecord)
    writer.writeObjectValue<AlertImpact>("alertImpact", alertRecord.alertImpact, serializeAlertImpact);
    writer.writeStringValue("alertRuleId", alertRecord.alertRuleId);
    writer.writeEnumValue<AlertRuleTemplate>("alertRuleTemplate", alertRecord.alertRuleTemplate);
    writer.writeDateValue("detectedDateTime", alertRecord.detectedDateTime);
    writer.writeStringValue("displayName", alertRecord.displayName);
    writer.writeDateValue("lastUpdatedDateTime", alertRecord.lastUpdatedDateTime);
    writer.writeDateValue("resolvedDateTime", alertRecord.resolvedDateTime);
    writer.writeEnumValue<RuleSeverityType>("severity", alertRecord.severity);
    writer.writeEnumValue<AlertStatusType>("status", alertRecord.status);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAlertRecordCollectionResponse(writer: SerializationWriter, alertRecordCollectionResponse: Partial<AlertRecordCollectionResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, alertRecordCollectionResponse)
    writer.writeCollectionOfObjectValues<AlertRecord>("value", alertRecordCollectionResponse.value, serializeAlertRecord);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAlertRule(writer: SerializationWriter, alertRule: Partial<AlertRule> | undefined = {}) : void {
    serializeEntity(writer, alertRule)
    writer.writeEnumValue<AlertRuleTemplate>("alertRuleTemplate", alertRule.alertRuleTemplate);
    writer.writeCollectionOfObjectValues<RuleCondition>("conditions", alertRule.conditions, serializeRuleCondition);
    writer.writeStringValue("description", alertRule.description);
    writer.writeStringValue("displayName", alertRule.displayName);
    writer.writeBooleanValue("enabled", alertRule.enabled);
    writer.writeBooleanValue("isSystemRule", alertRule.isSystemRule);
    writer.writeCollectionOfObjectValues<NotificationChannel>("notificationChannels", alertRule.notificationChannels, serializeNotificationChannel);
    writer.writeEnumValue<RuleSeverityType>("severity", alertRule.severity);
    writer.writeObjectValue<RuleThreshold>("threshold", alertRule.threshold, serializeRuleThreshold);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAlertRuleCollectionResponse(writer: SerializationWriter, alertRuleCollectionResponse: Partial<AlertRuleCollectionResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, alertRuleCollectionResponse)
    writer.writeCollectionOfObjectValues<AlertRule>("value", alertRuleCollectionResponse.value, serializeAlertRule);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeMonitoring(writer: SerializationWriter, monitoring: Partial<Monitoring> | undefined = {}) : void {
    serializeEntity(writer, monitoring)
    writer.writeCollectionOfObjectValues<AlertRecord>("alertRecords", monitoring.alertRecords, serializeAlertRecord);
    writer.writeCollectionOfObjectValues<AlertRule>("alertRules", monitoring.alertRules, serializeAlertRule);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeNotificationChannel(writer: SerializationWriter, notificationChannel: Partial<NotificationChannel> | undefined = {}) : void {
    writer.writeEnumValue<NotificationChannelType>("notificationChannelType", notificationChannel.notificationChannelType);
    writer.writeCollectionOfObjectValues<NotificationReceiver>("notificationReceivers", notificationChannel.notificationReceivers, serializeNotificationReceiver);
    writer.writeStringValue("@odata.type", notificationChannel.odataType);
    writer.writeAdditionalData(notificationChannel.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeNotificationReceiver(writer: SerializationWriter, notificationReceiver: Partial<NotificationReceiver> | undefined = {}) : void {
    writer.writeStringValue("contactInformation", notificationReceiver.contactInformation);
    writer.writeStringValue("locale", notificationReceiver.locale);
    writer.writeStringValue("@odata.type", notificationReceiver.odataType);
    writer.writeAdditionalData(notificationReceiver.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializePortalNotification(writer: SerializationWriter, portalNotification: Partial<PortalNotification> | undefined = {}) : void {
    writer.writeObjectValue<AlertImpact>("alertImpact", portalNotification.alertImpact, serializeAlertImpact);
    writer.writeStringValue("alertRecordId", portalNotification.alertRecordId);
    writer.writeStringValue("alertRuleId", portalNotification.alertRuleId);
    writer.writeStringValue("alertRuleName", portalNotification.alertRuleName);
    writer.writeEnumValue<AlertRuleTemplate>("alertRuleTemplate", portalNotification.alertRuleTemplate);
    writer.writeStringValue("id", portalNotification.id);
    writer.writeBooleanValue("isPortalNotificationSent", portalNotification.isPortalNotificationSent);
    writer.writeStringValue("@odata.type", portalNotification.odataType);
    writer.writeEnumValue<RuleSeverityType>("severity", portalNotification.severity);
    writer.writeAdditionalData(portalNotification.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRuleCondition(writer: SerializationWriter, ruleCondition: Partial<RuleCondition> | undefined = {}) : void {
    writer.writeEnumValue<AggregationType>("aggregation", ruleCondition.aggregation);
    writer.writeEnumValue<ConditionCategory>("conditionCategory", ruleCondition.conditionCategory);
    writer.writeStringValue("@odata.type", ruleCondition.odataType);
    writer.writeEnumValue<OperatorType>("operator", ruleCondition.operator);
    writer.writeEnumValue<RelationshipType>("relationshipType", ruleCondition.relationshipType);
    writer.writeStringValue("thresholdValue", ruleCondition.thresholdValue);
    writer.writeAdditionalData(ruleCondition.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRuleThreshold(writer: SerializationWriter, ruleThreshold: Partial<RuleThreshold> | undefined = {}) : void {
    writer.writeEnumValue<AggregationType>("aggregation", ruleThreshold.aggregation);
    writer.writeStringValue("@odata.type", ruleThreshold.odataType);
    writer.writeEnumValue<OperatorType>("operator", ruleThreshold.operator);
    writer.writeNumberValue("target", ruleThreshold.target);
    writer.writeAdditionalData(ruleThreshold.additionalData);
}
export const AggregationTypeObject = {
    Count: "count",
    Percentage: "percentage",
    AffectedCloudPcCount: "affectedCloudPcCount",
    AffectedCloudPcPercentage: "affectedCloudPcPercentage",
    UnknownFutureValue: "unknownFutureValue",
} as const;
export const AlertRuleTemplateObject = {
    CloudPcProvisionScenario: "cloudPcProvisionScenario",
    CloudPcImageUploadScenario: "cloudPcImageUploadScenario",
    CloudPcOnPremiseNetworkConnectionCheckScenario: "cloudPcOnPremiseNetworkConnectionCheckScenario",
    UnknownFutureValue: "unknownFutureValue",
    CloudPcInGracePeriodScenario: "cloudPcInGracePeriodScenario",
    CloudPcFrontlineInsufficientLicensesScenario: "cloudPcFrontlineInsufficientLicensesScenario",
    CloudPcInaccessibleScenario: "cloudPcInaccessibleScenario",
} as const;
export const AlertStatusTypeObject = {
    Active: "active",
    Resolved: "resolved",
    UnknownFutureValue: "unknownFutureValue",
} as const;
export const ConditionCategoryObject = {
    ProvisionFailures: "provisionFailures",
    ImageUploadFailures: "imageUploadFailures",
    AzureNetworkConnectionCheckFailures: "azureNetworkConnectionCheckFailures",
    CloudPcInGracePeriod: "cloudPcInGracePeriod",
    FrontlineInsufficientLicenses: "frontlineInsufficientLicenses",
    CloudPcConnectionErrors: "cloudPcConnectionErrors",
    CloudPcHostHealthCheckFailures: "cloudPcHostHealthCheckFailures",
    CloudPcZoneOutage: "cloudPcZoneOutage",
    UnknownFutureValue: "unknownFutureValue",
} as const;
export const NotificationChannelTypeObject = {
    Portal: "portal",
    Email: "email",
    PhoneCall: "phoneCall",
    Sms: "sms",
    UnknownFutureValue: "unknownFutureValue",
} as const;
export const OperatorTypeObject = {
    GreaterOrEqual: "greaterOrEqual",
    Equal: "equal",
    Greater: "greater",
    Less: "less",
    LessOrEqual: "lessOrEqual",
    NotEqual: "notEqual",
    UnknownFutureValue: "unknownFutureValue",
} as const;
export const RelationshipTypeObject = {
    And: "and",
    Or: "or",
    UnknownFutureValue: "unknownFutureValue",
} as const;
export const RuleSeverityTypeObject = {
    Unknown: "unknown",
    Informational: "informational",
    Warning: "warning",
    Critical: "critical",
    UnknownFutureValue: "unknownFutureValue",
} as const;
/* tslint:enable */
/* eslint-enable */
